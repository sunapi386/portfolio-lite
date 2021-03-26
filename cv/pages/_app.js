import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased text-gray-900 dark:text-white dark:bg-gray-700 h-screen overflow-auto">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
