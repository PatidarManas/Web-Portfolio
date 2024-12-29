import React from "react";
import { Clipboard, Github, Linkedin, Mail, Twitter, Tv } from "lucide-react";
import logo from "./Snapinsta.app_391179227_1335905343968438_1489506918566432597_n_1080-fotor-ai-art-effects-20241229105734.jpg"
export default function Page() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center mb-16">
        <img
          src={logo}
          alt="Profile"
          width={75}
          height={75}
          className="rounded-full mb-6"
        />
        <h1 className="text-xl font-medium mb-4">Hello, I'm Manas Patidar</h1>
        <p className="text-gray-600 mb-4">
        I specialize in designing and building websites that empower early-stage companies to launch impactful solutions efficiently.        </p>
        <p className="text-gray-600 mb-8">
        Combining intuitive design with solid architecture, I deliver scalable, user-centric applications in a matter of weeks, not months.        </p>
        <div className="flex gap-4">
        <a
  href="#"
  className="text-gray-600 hover:text-gray-900"
  onClick={(e) => {
    e.preventDefault(); 
    navigator.clipboard.writeText("manaspatidar170@gmail.com") 
      .then(() => alert("Email copied to clipboard!"))
      .catch(() => alert("Failed to copy email."));
  }}
>
  <Clipboard className="w-5 h-5" />
  <span className="sr-only">Copy</span>
</a>

          <a href="https://github.com/patidarManas" className="text-gray-600 hover:text-gray-900">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/manas-patidar-597b38228/" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:manaspatidar170@gmail.com" className="text-gray-600 hover:text-gray-900">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <section>
          <h2 className="text-sm font-medium text-gray-500 mb-8">Currently Ideating.</h2>
          <div className="space-y-12">
            <div>
              <h3 className="font-medium mb-2">
                <a href="https://www.utkrushta.co.in/" className="hover:text-gray-600">
                  Utkrushta
                </a>
              </h3>
              <p className="text-gray-600">Implementing AI based skill testing and hiring</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">
                <a href="https://github.com/PatidarManas/Carpool-Nexus_Frontend" className="hover:text-gray-600">
                  Carpool Nexus
                </a>
              </h3>
              <p className="text-gray-600">Developing an carpool application centric to indian customers.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-medium text-gray-500 mb-8">Works.</h2>
          <div className="space-y-12">
            <div>
              <h3 className="font-medium mb-2">
                <a href="https://urldb.vercel.app/" className="hover:text-gray-600">
                  URLDB
                </a>
              </h3>
              <p className="text-gray-600">Storage and database solution for small scale buisnesses</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">
                <a href="https://www.main.fyi/" className="hover:text-gray-600">
                  Main.fyi
                </a>
              </h3>
              <p className="text-gray-600">Created a portfolio builder with just a resume and changes</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">
                <a href="https://aleenarais.com/" className="hover:text-gray-600">
                aleenarais.com
                </a>
              </h3>
              <p className="text-gray-600">
                Course plaftorm for students to learn english by an famous content creator aleena rais.
              </p>
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
