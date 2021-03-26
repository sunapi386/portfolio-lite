import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased text-white bg-gray-700 h-screen overflow-auto">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
