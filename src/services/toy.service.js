
// import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
// import { userService } from './user.service.js'
import { httpService } from './http.service.js'

const BASE_URL = 'toy/'
const STORAGE_KEY = 'toyDB'
const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered']

export const toyService = {
    query,
    getById,
    save,
    remove,
    getNewToy,
    getDefaultFilter,
    getLabels
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
    return {
        name: utilService.makeToyName(),
        price: utilService.getRandomIntInclusive(10, 900),
        labels: utilService.makeLabels(),
        createdAt: utilService.getTimeFromStamp(Date.now()),
        inStock: Math.random() > 0.3 ? true : false
    }
}


function getDefaultFilter() {
    return { txt: '', labels: [], inStock: undefined }
}

function getLabels() {
    return labels
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))


