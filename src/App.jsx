import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Loader from "./components/Loader"
import TechnologySection from "./components/TechnologySection"
import Footer from "./components/Footer"

function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedTechnologies, setSelectedTechnologies] = useState([])

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading technologies:", error)
        setLoading(false)
      })
  }, [])

  const handleAddToStack = (technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    )

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ])

    toast.success(`${technology.name} added to your stack.`)
  }

  const handleRemoveFromStack = (id) => {
    const removedTechnology = selectedTechnologies.find(
      (item) => item.id === id
    )

    setSelectedTechnologies((previous) =>
      previous.filter((item) => item.id !== id)
    )

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`)
    }
  }

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      toast.warning("Your stack is already empty.")
      return
    }

    setSelectedTechnologies([])
    toast.info("All technologies removed from your stack.")
  }

  return (
    <>
      <Navbar />

      <Hero />

      {loading ? (
        <Loader />
      ) : (
        <TechnologySection
          technologies={technologies}
          selectedTechnologies={selectedTechnologies}
          onAddToStack={handleAddToStack}
          onRemoveFromStack={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      )}
<Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  )
}

export default App