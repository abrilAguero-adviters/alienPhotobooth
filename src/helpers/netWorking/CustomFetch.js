export  const customFetch = async (url, configs, ms = 45000) => {
    try{
        var controller = new AbortController();
        var signal = controller.signal;

        setTimeout(() => {
            controller.abort();
            }, ms);
            configs = {...configs, signal}

            let response = await fetch(url, configs)

            return response
    }catch(e){
        throw e
    }
    
};
    
