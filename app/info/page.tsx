export default function InfoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Info & Contatti</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Contattaci</h2>
          <p className="text-gray-700 mb-6">
            Hai domande o suggerimenti? Siamo qui per aiutarti!
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@jentu.it" className="text-jentu-teal hover:underline">
                info@jentu.it
              </a>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/jentu.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jentu-teal hover:underline"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/share/18x6GWmkaN/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jentu-teal hover:underline"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
