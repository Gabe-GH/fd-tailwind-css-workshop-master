// pages/wireFrameCard.jsx
export default function wireFrameCard() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
          <div className="border border-purple-900 p-8 rounded-lg transform scale-100 max-w-4xl">
              <div className="flex gap-8">
                  <div className="w-64">
                      <div className="flex gap-4 mb-4">
                          <div className="w-32 h-8 bg-gray-300 text-left"></div>
                          <div className="h-8 flex-grow bg-gray-300"></div>
                          <div className="w-8 h-8 bg-gray-300"></div>
                      </div>
                      <div className="h-4 bg-gray-300 my-4"></div>
                      <div className="h-4 bg-gray-300 my-4 w-full"></div>
                      <div className="h-4 bg-gray-300 my-4"></div>
                      <div className="h-4 bg-gray-300 my-4"></div>
                      <div className="h-4 bg-gray-300 my-4"></div>
                      <div className="h-4 bg-gray-300 my-4"></div>
                      <div className="h-4 bg-gray-300 my-4"></div>
                      <div className="h-4 bg-gray-300 my-4"></div>
                      <div className="h-4 bg-gray-300 my-4"></div>
                    </div>
                  <div className="flex-grow min-h-[300px] bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500 text-lg">Image Container Area</p>
                  </div>
              </div>
            <div className="flex gap-4 justify-center mt-8">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
      </div>
    )
  }
  