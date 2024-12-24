const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('./weighty-arcadia-445404-d8-e80ad653e6a5.json')
     
async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-rizkyamalina',
      keyFilename: pathKey,
    });
 
    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;