var Appoinment =require('./Appoinments');


export.add=function(req,res){

	var Appoint=new Appoinment({
		day:req.body.day,
		from:req.body.from,
		to:req.body.to,
		doctorId:req.body.doctorId,
		userId:req.body.userId,
	});
	Appoint.save(function(err,data){
		if(err){
			return err
		}
		res.json(data);
	})
	
}