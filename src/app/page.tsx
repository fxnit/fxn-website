import Image from "next/image";
import Link from "next/link";
import EnvBanner from "./components/EnvBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dev/Test Environment Banner */}
      <EnvBanner environment="dev" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">FXN IT</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Fix IT Right.
            <span className="block text-blue-600">Build IT Bright.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            FXN IT delivers Infrastructure, DevOps, Cloud, and AI-ready systems with 
            productized service packages called <span className="font-semibold text-green-600">WeGot</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore WeGot Solutions
            </a>
            <a 
              href="#contact" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* WeGot Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">WeGot Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Not just services, WeGot solutions. Our productized packages deliver 
              reliable, scalable, and AI-ready infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* InfraFix */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">InfraFix</h3>
              <p className="text-gray-600 mb-4">
                Kubernetes, Monitoring, DevOps Pipelines. Build strong, resilient foundations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Kubernetes orchestration</li>
                <li>• Monitoring & alerting</li>
                <li>• CI/CD automation</li>
              </ul>
            </div>

            {/* AI-Ready Infra */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Ready Infra</h3>
              <p className="text-gray-600 mb-4">
                GPU Clusters, MLOps, Data Pipelines. Infrastructure prepared for ML/AI workloads.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• GPU cluster management</li>
                <li>• MLOps pipelines</li>
                <li>• Data infrastructure</li>
              </ul>
            </div>

            {/* CloudFix */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border border-orange-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CloudFix</h3>
              <p className="text-gray-600 mb-4">
                Azure, AWS, GCP Infrastructure Consulting. Multi-cloud expertise and optimization.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-cloud strategy</li>
                <li>• Cost optimization</li>
                <li>• Security & compliance</li>
              </ul>
            </div>

            {/* System Design */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">System Design</h3>
              <p className="text-gray-600 mb-4">
                Enterprise Architecture, Microservices, Cloud-native patterns. Scalable system design.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Enterprise architecture</li>
                <li>• Microservices design</li>
                <li>• Cloud-native patterns</li>
              </ul>
            </div>

            {/* Infrastructure Analysis */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl border border-indigo-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Analysis</h3>
              <p className="text-gray-600 mb-4">
                Health Checks, Performance Tuning, Cost Optimization. Continuous improvement.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Health assessments</li>
                <li>• Performance tuning</li>
                <li>• Cost optimization</li>
              </ul>
            </div>

            {/* DevOps & Monitoring */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border border-red-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DevOps & Monitoring</h3>
              <p className="text-gray-600 mb-4">
                CI/CD Automation, Observability, Incident Response. Smart automation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• CI/CD pipelines</li>
                <li>• Observability stack</li>
                <li>• Incident management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About FXN IT</h2>
              <p className="text-lg text-gray-600 mb-6">
                Born in Dubai, built for global reach. FXN IT is a forward-looking technology 
                consulting brand that empowers enterprises and startups with reliable, scalable, 
                secure, and AI-driven infrastructure.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We position ourselves as a hybrid between a consultancy and a product company, 
                offering packaged solutions (WeGot) instead of vague services. Our mission is 
                to fix IT challenges today and build scalable and intelligent systems for tomorrow.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">Global</div>
                  <div className="text-sm text-gray-600">Reach</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose WeGot?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Productized solutions, not vague services
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  AI-ready infrastructure from day one
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Proven expertise in cloud and DevOps
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Global support with local expertise
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
                      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how FXN IT can help you build the infrastructure of tomorrow. 
              Our WeGot solutions are ready to transform your IT landscape.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@fxnit.com" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="#services" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">FXN IT</h3>
              <p className="text-gray-300">
                Fix IT Right. Build IT Bright.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-blue-400 transition-colors">InfraFix</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">AI-Ready Infra</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">CloudFix</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">System Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FXN IT. All rights reserved. Born in Dubai, built for global reach.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
