import { collectionsDictionary, getConfig } from "../../helpers/netWorking/Constants";
import { customFetch } from "../../helpers/netWorking/CustomFetch";

export const CollectionService = async (collection, TOKEN_ID) => {

  try {

        var configs = getConfig("GET");
    
        const response = await customFetch(`https://api${collectionsDictionary[collection]}.thealienboy.com/assets/images/transparent/${TOKEN_ID}`, configs, 30000);
    

      } catch (e) {
        console.log("Error");
        console.log(e);
        throw e;
      }
}
