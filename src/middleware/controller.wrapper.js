/*
export const controllerWrapper = async (req, res, next) => {
  try {
    await getOne(req, res, next);
  } catch(err){
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
};
*/

// On va dynamiser ce middleware afin qu'il puisse appeler n'importe quel controller
export const controllerWrapper = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch(err){
    console.error(err);

    if(err.name === 'ZodError'){
      return res.status(400).json({error: `${err.errors[0].path[0]} : ${err.errors[0].message}`});
    }

    res.status(500).json({error: 'Internal Server Error, plz retry again later'});
  }
};