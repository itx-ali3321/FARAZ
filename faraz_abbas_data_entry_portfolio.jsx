<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Faraz Abbas - Professional Data Entry Specialist specializing in data entry, web research, email collection, data mining, and CRM management. Reliable, accurate, and efficient services for businesses.">
    <meta name="keywords" content="Data Entry Specialist, Faraz Abbas, Email Collection, Web Research, Data Mining, Lead Generation, CRM Data Management, Microsoft Excel, Google Sheets">
    <meta name="author" content="Faraz Abbas">
    <title>Faraz Abbas - Data Entry Specialist</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        /* Hero Layout */
.hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
}

.hero-text {
    flex: 1;
    min-width: 280px;
}

.hero-image {
    flex: 1;
    text-align: right;
    min-width: 280px;
}

.profile-pic {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    object-fit: cover;
    border: 6px solid #007bff;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    opacity: 0;
    transform: translateX(40px);
    animation: slideIn 1.2s ease forwards;
}

@keyframes slideIn {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .hero-content {
        flex-direction: column-reverse;
        text-align: center;
    }

    .hero-image {
        text-align: center;
    }
}

        /* Global Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Roboto', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            scroll-behavior: smooth;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        h1, h2, h3 {
            font-weight: 700;
        }
        p {
            font-weight: 300;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
        .btn {
            display: inline-block;
            padding: 12px 24px;
            background-color: #007bff;
            color: white;
            border-radius: 5px;
            transition: background-color 0.3s ease;
            font-weight: 500;
        }
        .btn:hover {
            background-color: #0056b3;
        }
        .btn-secondary {
            background-color: #6c757d;
        }
        .btn-secondary:hover {
            background-color: #545b62;
        }
        .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            padding: 20px;
            margin: 20px 0;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }
        .icon {
            font-size: 2rem;
            color: #007bff;
            margin-bottom: 10px;
        }
        /* Header */
        header {
            background: linear-gradient(135deg, #f5f5f5, #e9ecef);
            padding: 50px 0;
            text-align: center;
        }
        header h1 {
            font-size: 3rem;
            margin-bottom: 10px;
        }
        header h2 {
            font-size: 1.5rem;
            color: #6c757d;
            margin-bottom: 20px;
        }
        header p {
            font-size: 1.2rem;
            margin-bottom: 30px;
        }
        /* Sections */
        section {
            padding: 60px 0;
        }
        section h2 {
            text-align: center;
            margin-bottom: 40px;
            font-size: 2.5rem;
        }
        .services, .tools {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        .why-choose {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .why-choose div {
            flex: 1 1 200px;
            text-align: center;
            margin: 20px;
        }
        /* Footer */
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 20px 0;
        }
        /* Animations */
        .fade-in {
            opacity: 0;
            animation: fadeIn 1s ease-in-out forwards;
        }
        @keyframes fadeIn {
            to {
                opacity: 1;
            }
        }
        /* Responsive */
        @media (max-width: 768px) {
            header h1 {
                font-size: 2rem;
            }
            header h2 {
                font-size: 1.2rem;
            }
            section h2 {
                font-size: 2rem;
            }
            .services, .tools {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <header id="hero">
    <div class="container hero-content">

        <div class="hero-text">
            <h1>Faraz Abbas</h1>
            <h2>Data Entry Specialist | Email Collection | Web Research | Data Mining</h2>
            <p>Delivering accurate, reliable data solutions with a commitment to precision and timely delivery.</p>
            <a href="mailto:farazabbas896@gmail.com" class="btn">Contact Me</a>
            <a href="https://www.linkedin.com/in/faraz-abbas-74ba5937a/" class="btn btn-secondary" target="_blank">LinkedIn</a>
        </div>

        <div class="hero-image">
            <img src="image.4.jpg" alt="Faraz Abbas" class="profile-pic">
        </div>

    </div>
</header>


    <!-- Services Section -->
    <section id="services" class="container">
        <h2>Services</h2>
        <div class="services">
            <div class="card">
                <i class="fas fa-keyboard icon"></i>
                <h3>Data Entry</h3>
                <p>Accurate and efficient entry of data into databases, spreadsheets, and systems, ensuring error-free results.</p>
            </div>
            <div class="card">
                <i class="fas fa-search icon"></i>
                <h3>Web Research</h3>
                <p>Conducting thorough online research to gather relevant information and insights for your projects.</p>
            </div>
            <div class="card">
                <i class="fas fa-envelope icon"></i>
                <h3>Email Collection & Lead Generation</h3>
                <p>Collecting targeted email lists and generating leads to support marketing and sales efforts.</p>
            </div>
            <div class="card">
                <i class="fas fa-database icon"></i>
                <h3>Data Mining</h3>
                <p>Extracting valuable data from various sources to uncover patterns and actionable insights.</p>
            </div>
            <div class="card">
                <i class="fas fa-cogs icon"></i>
                <h3>CRM Data Management</h3>
                <p>Managing and optimizing customer relationship management data for better business outcomes.</p>
            </div>
        </div>
    </section>

    <!-- Experience & Tools Section -->
    <section id="tools" class="container">
        <h2>Experience & Tools</h2>
        <div class="tools">
            <div class="card">
                <i class="fas fa-file-excel icon"></i>
                <h3>Microsoft Excel</h3>
                <ul>
                    <li>Advanced formulas and data analysis</li>
                    <li>Pivot tables and charts</li>
                    <li>Data cleaning and validation</li>
                </ul>
            </div>
            <div class="card">
                <i class="fas fa-table icon"></i>
                <h3>Google Sheets</h3>
                <ul>
                    <li>Collaborative data entry</li>
                    <li>Automation with scripts</li>
                    <li>Real-time sharing and updates</li>
                </ul>
            </div>
            <div class="card">
                <i class="fas fa-file-word icon"></i>
                <h3>MS Word</h3>
                <ul>
                    <li>Document formatting and editing</li>
                    <li>Report generation</li>
                    <li>Template creation</li>
                </ul>
            </div>
            <div class="card">
                <i class="fas fa-spider icon"></i>
                <h3>Data Scraping Tools</h3>
                <ul>
                    <li>Web scraping for data collection</li>
                    <li>Automation tools like Scrapy</li>
                    <li>Data extraction from websites</li>
                </ul>
            </div>
            <div class="card">
                <i class="fas fa-users-cog icon"></i>
                <h3>CRM Platforms</h3>
                <ul>
                    <li>Salesforce and HubSpot management</li>
                    <li>Data import/export</li>
                    <li>Customer data organization</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Why Choose Me Section -->
    <section id="why-choose" class="container">
        <h2>Why Choose Me</h2>
        <div class="why-choose">
            <div>
                <i class="fas fa-check-circle icon"></i>
                <h3>High Accuracy</h3>
                <p>Ensuring 99%+ accuracy in all data tasks.</p>
            </div>
            <div>
                <i class="fas fa-clock icon"></i>
                <h3>Fast Turnaround</h3>
                <p>Delivering projects on time, every time.</p>
            </div>
            <div>
                <i class="fas fa-chart-line icon"></i>
                <h3>Organized Reporting</h3>
                <p>Clear, structured reports for easy understanding.</p>
            </div>
            <div>
                <i class="fas fa-comments icon"></i>
                <h3>Reliable Communication</h3>
                <p>Regular updates and open dialogue throughout projects.</p>
            </div>
            <div>
                <i class="fas fa-lock icon"></i>
                <h3>Confidential Handling</h3>
                <p>Strict privacy and security for all data.</p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="container">
        <h2>Contact</h2>
        <div class="card">
            <p>Email: <a href="mailto:farazabbas896@gmail.com">farazabbas896@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/faraz-abbas-74ba5937a/" target="_blank">linkedin.com/in/faraz-abbas-74ba5937a</a></p>
            <p>Let’s Work Together</p>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>&copy; 2026 Faraz Abbas. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Simple JavaScript for animations on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        });

        document.querySelectorAll('.card').forEach(card => {
            observer.observe(card);
        });
    </script>
</body>
</html>
