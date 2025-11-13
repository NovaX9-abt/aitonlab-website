import { User } from "lucide-react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
const Portfolio = () => {
  return <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Photo */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              My Portfolio
            </h1>
            
            {/* Professional Photo Section with Upload */}
            <Card className="p-8 md:p-12 mb-8 shadow-elegant animate-slide-up">
              <div className="flex flex-col items-center gap-6">
                <div className="relative group">
                  {/* Photo Upload Section */}
                  <label htmlFor="photo-upload" className="cursor-pointer block">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
                      <User className="w-24 h-24 md:w-32 md:h-32 text-primary/40" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-primary font-medium bg-background/90 px-4 py-2 rounded-lg">
                          Click to Upload Photo
                        </span>
                      </div>
                    </div>
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            const img = document.getElementById('profile-photo') as HTMLImageElement;
                            if (img && event.target?.result) {
                              img.src = event.target.result as string;
                              img.style.display = 'block';
                              const placeholder = document.getElementById('photo-placeholder');
                              if (placeholder) placeholder.style.display = 'none';
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                  <img
                    id="profile-photo"
                    alt="Professional headshot"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl hidden"
                  />
                  <div id="photo-placeholder" className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                </div>
                
                <div className="space-y-2 text-center">
                  <p className="text-lg text-muted-foreground">
                    AI Solutions Developer & Young Entrepreneur
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary">18 Years Old • Based in Rwanda</div>
                </div>
              </div>
              
              {/* Instructions for updating photo */}
              <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Click the photo above to upload your professional headshot</strong> - Supported formats: JPG, PNG, WEBP
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Footer */}
      <Footer />
    </main>;
};
export default Portfolio;