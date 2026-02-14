import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Database, Search, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Faraz Abbas</h1>
          <p className="text-xl text-gray-600">Data Entry Specialist | Email Collection | Web Research | Data Mining</p>
          <div className="flex justify-center gap-4 pt-4">
            <Button asChild className="rounded-2xl">
              <a href="mailto:farazabbas896@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl">
              <a href="https://www.linkedin.com/in/faraz-abbas-74ba5937a/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </motion.section>

        {/* About Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p>
              I am a dedicated Data Entry Specialist with strong attention to detail and a commitment to accuracy. I help businesses manage, organize, and analyze data efficiently. My experience includes large-scale data entry projects, email list building, web research, and structured data mining.
            </p>
            <p>
              I focus on delivering clean, verified, and well-structured data that helps companies make informed decisions and improve productivity.
            </p>
          </div>
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Core Strengths</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 100% Accuracy Focus</li>
                <li>• Fast Typing & Data Processing</li>
                <li>• Organized and Structured Reporting</li>
                <li>• Deadline-Oriented Work</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Services Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 space-y-4">
                <Database className="h-8 w-8" />
                <h3 className="text-xl font-semibold">Data Entry</h3>
                <p className="text-gray-600">
                  Accurate data input from PDFs, scanned documents, websites, and spreadsheets into organized digital formats.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 space-y-4">
                <Search className="h-8 w-8" />
                <h3 className="text-xl font-semibold">Web Research</h3>
                <p className="text-gray-600">
                  Detailed online research to collect business information, contact details, market data, and competitor insights.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 space-y-4">
                <FileText className="h-8 w-8" />
                <h3 className="text-xl font-semibold">Email Collection & Data Mining</h3>
                <p className="text-gray-600">
                  Targeted email list building and structured data extraction to support marketing and business development campaigns.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Experience & Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Project Experience</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bulk Data Entry Projects</li>
                  <li>• CRM Data Management</li>
                  <li>• Lead Generation Lists</li>
                  <li>• Database Cleaning & Formatting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Tools & Software</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Microsoft Excel</li>
                  <li>• Google Sheets</li>
                  <li>• MS Word</li>
                  <li>• Data Scraping Tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center space-y-4 pt-10">
          <h2 className="text-3xl font-semibold">Let’s Work Together</h2>
          <p className="text-gray-600">
            If you need reliable and accurate data services, feel free to contact me. I am ready to support your business needs.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button asChild className="rounded-2xl">
              <a href="mailto:farazabbas896@gmail.com">farazabbas896@gmail.com</a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl">
              <a href="https://www.linkedin.com/in/faraz-abbas-74ba5937a/" target="_blank">
                Visit LinkedIn
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
