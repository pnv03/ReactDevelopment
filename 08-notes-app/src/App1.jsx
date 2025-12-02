import { useState, useEffect } from 'react'

const App = () => {
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [task, setTask] = useState([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('task'))
        if (saved) setTask(saved)
    }, [])


    const submitHandler = (e) => {
        e.preventDefault()

        const newTaskArray = [...task]
        newTaskArray.push({ title, detail })
        setTask(newTaskArray)

        localStorage.setItem('task', JSON.stringify(newTaskArray))

        setTitle('')
        setDetail('')
    }

    const noteDelete = (idx) => {
        const copyTask = [...task]
        copyTask.splice(idx, 1)
        setTask(copyTask)

        localStorage.setItem("task", JSON.stringify(copyTask))
    }

    return (
        <div className="min-h-screen lg:flex items-start bg-black text-white p-6">

            <form
                onSubmit={submitHandler}
                className="flex flex-col lg:w-1/2 p-8 gap-6 bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800"
            >
                <h2 className="text-3xl font-bold mb-4 text-white">Add Notes</h2>

                <input
                    type="text"
                    placeholder="Enter Notes Heading"
                    className="px-5 py-3 w-full border border-neutral-700 bg-neutral-800 text-white rounded-lg focus:ring-2 focus:ring-white focus:outline-none transition-all placeholder:text-gray-400"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Enter Details"
                    className="px-5 py-3 w-full h-40 border border-neutral-700 bg-neutral-800 text-white rounded-lg resize-none focus:ring-2 focus:ring-white focus:outline-none transition-all placeholder:text-gray-400"
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                />

                <button className="bg-white text-black w-full py-3 rounded-lg font-semibold border border-neutral-300 hover:bg-neutral-200 transition-all shadow-md">
                    Add Note
                </button>
            </form>

            <div className="flex flex-col flex-wrap p-10 gap-6 lg:w-1/2">
                <h1 className="text-3xl font-bold mb-6">Your Notes</h1>

                <div className="flex flex-wrap gap-6 h-full overflow-auto">
                    {task.map((elem, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col justify-between p-10 h-90 w-70 rounded-2xl shadow-2xl bg-[url('./assets/notes2.png')] bg-cover bg-center hover:scale-105 transition-transform overflow-auto"
                        >
                            <h3 className="text-xl font-bold text-black">{elem.title}</h3>
                            <p className="text-gray-800 mt-2">{elem.detail}</p>
                            <button
                                onClick={() => noteDelete(idx)}
                                className="bg-red-600 w-full text-white rounded-xl px-2 py-1 mt-3 hover:bg-red-700 transition-colors"
                            >
                                Delete
                            </button>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
