export const sortArray = (array, type, sort) => {
  let newArray;

  if(type === 'title'){
    if(sort === 'ASC'){
      newArray = array.sort((a,b) => {
        let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
      })
    }
    if(sort === 'DESC'){
      newArray = array.sort((a,b) => {
        let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

        if (fa > fb) {
            return -1;
        }
        if (fa < fb) {
            return 1;
        }
        return 0;
      })
    }    
  }

  if(type === 'price'){
    if(sort === 'ASC'){
      newArray = array.sort((a,b) => a.pricePlus - b.pricePlus)
    }
    if(sort === 'DESC'){
      newArray = array.sort((a,b) => b.pricePlus - a.pricePlus)
    }    
  }

  return newArray
}