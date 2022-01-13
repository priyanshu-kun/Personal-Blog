module.exports = {
    register: async (req,res) => {
       try {

       } 
       catch(err) {
            // I have to handle errors here
           // for now 
           res.status(500).json("Some internal error");
       }
    }
}
