const http = require('http');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

// Load environment variables from .env if present
if (fs.existsSync(path.join(__dirname, '.env'))) {
  const envConfig = fs.readFileSync(path.join(__dirname, '.env'), 'utf-8');
  envConfig.split('\n').forEach((line) => {
    const [key, ...value] = line.split('=');
    if (key && value.length > 0) {
      process.env[key.trim()] = value.join('=').trim().replace(/^["']|["']$/g, '');
    }
  });
}

const PORTS = [8080, 3000, 5500];

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

// Create Nodemailer Transporter
const createMailTransporter = async () => {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  // Fallback to custom SMTP if defined
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  // Local development fallback
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'ethereal.user@ethereal.email',
      pass: 'ethereal.pass'
    }
  });
};

const handleContactApi = async (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    try {
      const data = JSON.parse(body || '{}');
      const { name, email, service, budget, vision } = data;

      if (!name || !email) {
        res.writeHead(400, {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ success: false, error: 'Name and email are required fields.' }));
        return;
      }

      console.log(`\n📬 [NEW INQUIRY RECEIVED] from ${name} (${email}) for ${service || 'Video Project'} [Budget: ${budget || 'N/A'}]`);

      // Persist inquiry to a local backup file so no leads are ever lost
      const logEntry = {
        timestamp: new Date().toISOString(),
        name,
        email,
        service: service || 'General Video Project',
        budget: budget || 'Not specified',
        vision: vision || 'No details provided'
      };

      try {
        const logsPath = path.join(__dirname, 'inquiries.json');
        let logs = [];
        if (fs.existsSync(logsPath)) {
          logs = JSON.parse(fs.readFileSync(logsPath, 'utf-8') || '[]');
        }
        logs.push(logEntry);
        fs.writeFileSync(logsPath, JSON.stringify(logs, null, 2));
      } catch (logErr) {
        console.error('Inquiry log error:', logErr.message);
      }

      // Luxury Dark-Mode HTML Email Template
      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #070709; color: #ffffff; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #0f0f14; border: 1px solid #d4af37; border-radius: 12px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #181822 0%, #0c0c10 100%); padding: 30px; border-bottom: 1px solid rgba(212, 175, 55, 0.3); text-align: center; }
            .header h1 { margin: 0; color: #d4af37; font-size: 20px; letter-spacing: 2px; text-transform: uppercase; }
            .header p { margin: 6px 0 0; color: #a1a1aa; font-size: 13px; }
            .body-content { padding: 30px; }
            .field-group { margin-bottom: 20px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #d4af37; font-weight: bold; margin-bottom: 4px; }
            .value { font-size: 15px; color: #f4f4f5; background: #161620; padding: 12px 16px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.06); }
            .message-box { font-size: 15px; color: #f4f4f5; background: #161620; padding: 16px; border-radius: 6px; border: 1px solid rgba(212,175,55,0.25); white-space: pre-wrap; line-height: 1.6; }
            .footer { padding: 20px 30px; background: #09090d; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #71717a; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✦ New Project Inquiry</h1>
              <p>Creative Visuals Studio • Video Editing & Design Portfolio</p>
            </div>
            <div class="body-content">
              <div class="field-group">
                <div class="label">Client Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field-group">
                <div class="label">Client Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #00F2FE; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-group">
                <div class="label">Requested Service</div>
                <div class="value">${service || 'Video Editing'}</div>
              </div>
              <div class="field-group">
                <div class="label">Estimated Budget</div>
                <div class="value" style="color: #d4af37; font-weight: bold;">${budget || 'Not specified'}</div>
              </div>
              <div class="field-group">
                <div class="label">Project Vision & Timeline</div>
                <div class="message-box">${vision || 'No vision or details provided.'}</div>
              </div>
            </div>
            <div class="footer">
              Sent directly from your portfolio booking form • ${new Date().toLocaleString()}
            </div>
          </div>
        </body>
        </html>
      `;

      // Dispatch Email via Nodemailer
      try {
        const transporter = await createMailTransporter();
        const mailOptions = {
          from: process.env.EMAIL_USER ? `"Creative Portfolio" <${process.env.EMAIL_USER}>` : `"Creative Portfolio" <noreply@creativeeditor.design>`,
          to: 'mrakshay31@gmail.com',
          replyTo: email,
          subject: `✦ New Project Booking: ${name} [${service || 'Video Project'}]`,
          text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\n\nProject Vision:\n${vision}`,
          html: emailHtml
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
          await transporter.sendMail(mailOptions);
          console.log(`✓ Email successfully delivered to mrakshay31@gmail.com`);
        } else {
          console.log(`ℹ Notice: Email logged to inquiries.json. To enable live Gmail delivery, add EMAIL_USER and EMAIL_PASS to your .env file.`);
        }
      } catch (mailErr) {
        console.error('Mail dispatch error:', mailErr.message);
      }

      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify({
        success: true,
        message: 'Project Inquiry sent successfully to Akshay!'
      }));
    } catch (parseErr) {
      res.writeHead(500, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify({ success: false, error: parseErr.message }));
    }
  });
};

const handleRequest = (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  // API Endpoint Route for Contact Form
  if (req.method === 'POST' && (req.url === '/api/contact' || req.url === '/api/send-email')) {
    handleContactApi(req, res);
    return;
  }

  let urlPath = req.url.split('?')[0];
  let safePath = path.normalize(urlPath).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(__dirname, safePath === '/' || safePath === '\\' ? 'index.html' : safePath);

  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    const publicPath = path.join(__dirname, 'public', safePath === '/' || safePath === '\\' ? 'index.html' : safePath);
    if (fs.existsSync(publicPath) && fs.statSync(publicPath).isFile()) {
      filePath = publicPath;
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      });
      res.end('<h1>404 - File Not Found</h1><p>The requested file was not found.</p>', 'utf-8');
      return;
    }

    const extname = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    // Support Video Streaming / Range Requests
    const range = req.headers.range;
    if (range && (extname === '.mp4' || extname === '.webm')) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
      const chunksize = end - start + 1;
      const file = fs.createReadStream(filePath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      file.pipe(res);
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });

    fs.createReadStream(filePath).pipe(res);
  });
};

PORTS.forEach((port) => {
  const server = http.createServer(handleRequest);
  server.listen(port, '0.0.0.0', () => {
    console.log(`✓ Website live at http://localhost:${port}/`);
  });
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is currently busy, skipping...`);
    } else {
      console.error(`Error on port ${port}:`, err.message);
    }
  });
});
