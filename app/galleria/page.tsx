export default function GalleriaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Galleria</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-gray-600 mb-8">
          Qui troverai foto e immagini delle migliori condizioni meteo marine del Salento.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-gray-500">Foto {i}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
