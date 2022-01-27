const AppCong = require("../models/conge.model.js");
exports.create = (req, res) => { 
const congee = new AppCong({ 
titre:req.body.titre,
duree:req.body.duree,
date:req.body.date,
raison:req.body.raison,
justification:req.body.justification

}); 
congee.save() .then((data) => { 
res.send(data); 
}) 
.catch((err) => { 
res.status(500).send({ 
    message: 
    err.message || "Some error occurred while creating the Message.", 
});
}); 
};
exports.findAll = (req, res) => { 
    AppCong.find() .then((data) => { 
    res.send(data); 
    }) 
    .catch((err) => { 
    res.status(500).send({ 
        message: err.message || "Some error occurred while retrieving messages.",
    }); 
    }); 
    };
    exports.findOne = (req, res) => { 
        AppCong.findById(req.params.id) .then((data) => { 
            if (!data) { 
            return res.status(404).send({ 
                message: "Message not found with id " + req.params.id,
         });
         } 
         res.send(data); 
        }) 
        .catch((err) => { 
            if (err.kind === "ObjectId") { 
                return res.status(404).send({ 
                    message: "Message not found with id " + req.params.id,
                 }); 
                } 
                return res.status(500).send({
                    message: "Error retrieving message with id " + req.params.id,
                 });
             }); 
        };
    exports.update = (req, res) => { 
        AppCong.findByIdAndUpdate( req.params.id, {
            titre:req.body.titre,
            duree:req.body.duree,
            date:req.body.date,
            raison:req.body.raison,
            justification:req.body.justification            
         }, 
        { new: true }
         )
         .then((data) => { 
         if (!data) { 
               return res.status(404).send({ 
             message: "Message not found with id " + req.params.id,
         });
        } res.send(data);
        }) 
        .catch((err) => {
            if (err.kind === "ObjectId") { 
             return res.status(404).send({ 
            message: "Message not found with id " + req.params.id,
             });
             } 
             return res.status(500).send({ 
             message: "Error updating message with id " + req.params.id,
             });
             }); 
            };
exports.delete = (req, res) => { 
    AppCong.findByIdAndRemove(req.params.id) 
     .then((data) => { 
         if (!data) { 
         return res.status(404).send({ 
         message: "Message not found with id " + req.params.id,
        });
        } 
        res.send({ 
         message: "Message deleted successfully!" 
        });
    }) 
        .catch((err) => { 
         if (err.kind === "ObjectId" || err.name === "NotFound") { 
        return res.status(404).send({
        message: "Message not found with id " + req.params.id,
         });
        } 
        return res.status(500).send({ 
        message: "Could not delete message with id " + req.params.id,
        });
        }); 
    };