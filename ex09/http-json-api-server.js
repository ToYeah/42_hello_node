/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-json-api-server.js                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: totaisei <totaisei@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/24 12:10:17 by totaisei          #+#    #+#             */
/*   Updated: 2020/12/25 12:15:08 by totaisei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require('http');

function generate_parseint(date)
{
	let result;
	result = {
		hour: date.getUTCHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
	return result;
}

function generate_unixtime(date)
{
	let result;
	result = {
		unixtime: date.getTime()
	}
	return result;
}

try{
	if (process.argv.length != 3)
		throw new Error("Invald argv");
	if (isNaN(process.argv[2]))
		throw new Error("Invalid port");

	let server = http.createServer((req, res) => {
		let url = new URL(req.url, 'http://hello_node.com');
		let query = url.searchParams.get('iso');
		let date = new Date(query);
		let value = undefined;

		if (query && !isNaN(date.getTime()) )
		{
			if(/^\/api\/parsetime\?/.test(req.url))
				value = generate_parseint(date);
			if(/^\/api\/unixtime\?/.test(req.url))
				value = generate_unixtime(date);
		}
		if (value != undefined)
		{
			res.writeHead(200, {'Content-Type': 'application/json'});
			let json_str = JSON.stringify(value);
			res.write(json_str);
			res.write('\n');
		}
		else
		{
			res.writeHead(404);
		}
		res.end();
	})

	server.listen(Number(process.argv[2]))
	.on('error', (err) => {
		console.error(`${err}`);
		return ;
	})
}catch(err){
	console.error(`${err}`);
}