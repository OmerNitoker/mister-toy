
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
// import { userService } from './user.service.js'
import { httpService } from './http.service.js'

const BASE_URL = 'toy/'
const STORAGE_KEY = 'toyDB'

export const toyService = {
    query,
    getById,
    save,
    remove,
    getNewToy,
    getDefaultFilter
}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}

function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL, toy)
    } else {
        // car.owner = userService.getLoggedinUser()
        return httpService.post(BASE_URL, toy)
    }
}

function getNewToy() {
    const toys = ['Teddy Bear', 'Barbie Doll', 'LEGO', 'Hot Wheels', 'Play-Doh', 'Rubiks Cube', 'Transformers', 'My Little Pony', 'Monopoly', 'Yo-yo', 'Mr. Potato Head']
    return {
        name: toys[utilService.getRandomIntInclusive(0,toys.length-1)] + ' ' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(10, 900),
        // createdAt: Date.now()        
        // speed: utilService.getRandomIntInclusive(50, 200),
    }
}


function getDefaultFilter() {
    return { txt: '', maxPrice: '' }
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))


