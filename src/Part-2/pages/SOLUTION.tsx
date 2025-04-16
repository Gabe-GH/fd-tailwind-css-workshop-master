// pages/SOLUTION.jsx
export default function solution() {
    return (
     <>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="mb-4">🕵️‍♀️ Spy Card 🕵️‍♂️</h1>
          <div className="border border-purple-900 p-8 rounded-lg transform scale-100 max-w-4xl">
              <div className="text-left text-xl font-bold mb-4">
                  <p>Secret Agent Profile</p>
              </div>
              <div className="flex gap-8">
                  <div className="flex-col w-64">
                      <div className="flex gap-4 mb-4">
                          <div className="w-32 text-left">
                            <p>Name:</p>
                            <h3 className="font-bold">Kim Possible</h3>
                          </div>
                      </div>
                      <div className="my-6 text-left">
                          <p>University:</p>
                          <h3 className="font-bold">007 University of Monaco</h3>
                      </div>
                      <div className="my-6 text-left">
                          <p>Bio:</p>
                          <h3 className="font-bold">I'm a secret agent</h3>
                      </div>
                  </div>
                  <div className="flex-grow min-h-[300px] bg-gray-100 rounded">
                    <img src="../src/assets/kimpossible.avif" alt="Kim Possible" className="object-cover w-full h-full rounded" />
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
    </>
    )
  }
  