
const getHeader = () => {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
}

export const getConfig = (method, body, signal) => {
    return {
        headers: getHeader(),
        method: method,
        body: JSON.stringify(body),
        signal,
    };
}

export const collectionsDictionary = {
    'Alien Boy' : '',
    'Alien Girl' : '-ag',
    'Alien UFO': '-ufo',
    'Alien Doogle': '-tad' 
  }