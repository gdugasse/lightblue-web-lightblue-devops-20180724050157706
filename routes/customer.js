	router.get('/',	function	(req,	res)	{
			setGetCustomerOptions(req,	res)
					.then(sendApiReq)
					.then(sendResponse)
					.catch(renderErrorPage)
					.done();
	});
	

	var	options	=	{
			method:	'GET',
			url:	customer_url,
			strictSSL:	false,
			headers:	{	}
	};

	function	setGetCustomerOptions(req,	res)	{
			var	customer_url	=	api_url.stringify({
					protocol:	"http",
					host:	_apis.customer.host,
					api:	_apis.customer.base_path,
					operation:	"customer/search?username=foo"
			});

			return	new	Promise(function	(fulfill)	{
									fulfill({
											options:	options,
											res:	res
									});
					});
	}
		
		
