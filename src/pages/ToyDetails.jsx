import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toyService } from "../services/toy.service"
import { showErrorMsg } from "../services/event-bus.service"

export function ToyDetails() {

    const [toy, setToy] = useState(null)
    const { toyId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadToy()
    }, [toyId])

    function loadToy() {
        toyService.getById(toyId)
            .then(toy => setToy(toy))
            .catch(err => {
                console.log('cannot load toy', err)
                showErrorMsg('cannot load toy')
                navigate('/toy')
            })
    }

    if (!toy) return <div>loading...</div>

    return (
        <section className="toy-details">
            <h1>Toy name: {toy.name}</h1>
            <h5>Price: {toy.price}</h5>
            <h5>Created at: {toy.createdAt}</h5>
            <h5>Labels: {toy.labels.join(',')}</h5>
            <p>🚗🚗🚗</p>
            <h5>Description:</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquam, ullam id harum eos quia itaque perferendis dolorem quas facilis ducimus voluptates commodi quidem voluptatem enim, numquam sunt minima. Id cum dolorum eos sunt sequi veritatis ab nostrum dolorem corporis facilis impedit labore doloribus voluptas magnam minima quaerat, voluptatibus incidunt.</p>
            <Link to="/toy">Back</Link>
        </section>
    )
}