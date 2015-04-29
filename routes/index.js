
/*
 * GET home page.
 */
var server = require('../app');
var connection;
exports.index = function(req, res){
  res.render('index', { title: 'Crowdsourced Mobile Diagnostic Services Analytics' });
};

exports.dashboard = function(req, res){
	
	connection = server.poolObject.getConnection();
	var result = "";
	var rowCount = 0;
	var data;
	
	
	try
	{
		var query = "Select * from networkcoverage";
		if(connection != null)
		{
			connection.query(query,function(error,rows,fields){
				if (error)
				{
					console.log("ERROR: " + error.message);
				}
				else
				{
					if(rows.length!==0)
					{

						console.log(rows);
						res.render('dashboard',{networkDetails:rows, title: 'CMDSA-Dashboard' });
					}
					else
					{
						var err="Invalid UerName/Password";
						console.log("returned 0 rows");
						//callback(err);
					}
				}

			});

		}
		else
		{
			console.log('Unable to get the Database Connection');
		}
	}
	catch (e)
	{
		console.log("Error:" + e);
	}
	finally
	{
		if(connection != null)
		{
			server.poolObject.returnConnection(connection);
		}
	}
	

	};
	
	exports.chart = function(req, res){
		connection = server.poolObject.getConnection();
		var result = "";
		var rowCount = 0;
		var data;
		
		
		try
		{
			var query = "Select * from networkcoverage";
			if(connection != null)
			{
				connection.query(query,function(error,rows,fields){
					if (error)
					{
						console.log("ERROR: " + error.message);
					}
					else
					{
						if(rows.length!==0)
						{

							console.log(rows);
							
							var T1=[];
							var T2=[];
							var T3=[];
							var T4=[];
							var T5=[];
							for(var i=0;i<rows.length;i++)
							{
								
								if((rows[i].carrier).localeCompare("T-Mobile"))
				           		 {
				                 	T1.push(rows[i].downloadSpeed);
				                 }
				                 if((rows[i].carrier).localeCompare("ATT"))
				                 {
				                	 T2.push(rows[i].downloadSpeed);
				                 }
				                 if((rows[i].carrier).localeCompare("cricKet"))
				                 {
				                	 T5.push(rows[i].downloadSpeed);
				                 }
				                 if((rows[i].carrier).localeCompare("Verizon"))
				                 {
				                	 T3.push(rows[i].downloadSpeed);
				                 }
				                 if((rows[i].carrier).localeCompare("MetroPCS"))
				                 {
				                	 T4.push(rows[i].downloadSpeed);
				                 }
							}
							var avgT1 =0;
							for(i=0;i<T1.length;i++)
							{
								avgT1 = avgT1+T1[i];
							}
							var avgT2 =0;
							for(i=0;i<T2.length;i++)
							{
								avgT2 = avgT2+T2[i];
							}
							var avgT3 =0;
							for(i=0;i<T3.length;i++)
							{
								avgT3 = avgT3+T3[i];
							}
							var avgT4 =0;
							for(i=0;i<T4.length;i++)
							{
								avgT4 = avgT4+T4[i];
							}
							var avgT5 =0;
							for(i=0;i<T5.length;i++)
							{
								avgT5 = avgT5+T5[i];
							}
							var map = [];
							map.push((avgT1 / T1.length));
							map.push((avgT2 / T2.length));
							map.push((avgT3 / T3.length));
							map.push((avgT4 / T4.length));
							map.push((avgT5 / T5.length));
							
							res.render('chart',{networkDetails:map, title: 'CMDSA-Dashboard' });
						}
						else
						{
							var err="Invalid UerName/Password";
							console.log("returned 0 rows");
							//callback(err);
						}
					}

				});

			}
			else
			{
				console.log('Unable to get the Database Connection');
			}
		}
		catch (e)
		{
			console.log("Error:" + e);
		}
		finally
		{
			if(connection != null)
			{
				server.poolObject.returnConnection(connection);
			}
		}
		
		};
		
		
		exports.uploadchart = function(req, res){
			connection = server.poolObject.getConnection();
			var result = "";
			var rowCount = 0;
			var data;
			
			
			try
			{
				var query = "Select * from networkcoverage";
				if(connection != null)
				{
					connection.query(query,function(error,rows,fields){
						if (error)
						{
							console.log("ERROR: " + error.message);
						}
						else
						{
							if(rows.length!==0)
							{

								console.log(rows);
								
								var T1=[];
								var T2=[];
								var T3=[];
								var T4=[];
								var T5=[];
								for(var i=0;i<rows.length;i++)
								{
									
									if((rows[i].carrier).localeCompare("T-Mobile"))
					           		 {
					                 	T1.push(rows[i].uploadSpeed);
					                 }
					                 if((rows[i].carrier).localeCompare("ATT"))
					                 {
					                	 T2.push(rows[i].uploadSpeed);
					                 }
					                 if((rows[i].carrier).localeCompare("cricKet"))
					                 {
					                	 T5.push(rows[i].downloadSpeed);
					                 }
					                 if((rows[i].carrier).localeCompare("Verizon"))
					                 {
					                	 T3.push(rows[i].uploadSpeed);
					                 }
					                 if((rows[i].carrier).localeCompare("MetroPCS"))
					                 {
					                	 T4.push(rows[i].uploadSpeed);
					                 }
								}
								var avgT1 =0;
								for(i=0;i<T1.length;i++)
								{
									avgT1 = avgT1+T1[i];
								}
								var avgT2 =0;
								for(i=0;i<T2.length;i++)
								{
									avgT2 = avgT2+T2[i];
								}
								var avgT3 =0;
								for(i=0;i<T3.length;i++)
								{
									avgT3 = avgT3+T3[i];
								}
								var avgT4 =0;
								for(i=0;i<T4.length;i++)
								{
									avgT4 = avgT4+T4[i];
								}
								var avgT5 =0;
								for(i=0;i<T5.length;i++)
								{
									avgT5 = avgT5+T5[i];
								}
								var map = [];
								map.push((avgT1 / T1.length));
								map.push((avgT2 / T2.length));
								map.push((avgT3 / T3.length));
								map.push((avgT4 / T4.length));
								map.push((avgT5 / T5.length));
								
								res.render('uploadchart',{networkDetails:map, title: 'CMDSA-Dashboard' });
							}
							else
							{
								var err="Invalid UerName/Password";
								console.log("returned 0 rows");
								//callback(err);
							}
						}

					});

				}
				else
				{
					console.log('Unable to get the Database Connection');
				}
			}
			catch (e)
			{
				console.log("Error:" + e);
			}
			finally
			{
				if(connection != null)
				{
					server.poolObject.returnConnection(connection);
				}
			}
			
			};