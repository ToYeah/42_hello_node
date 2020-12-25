/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: totaisei <totaisei@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/24 11:09:31 by totaisei          #+#    #+#             */
/*   Updated: 2020/12/25 13:03:56 by totaisei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const net = require('net')

function fill(num)
{
	if (num < 10)
		return '0' + num;
	return num;
}

try {
	if (process.argv.length != 3)
		throw new Error("Invald argv");
	if (isNaN(process.argv[2]))
		throw new Error("Invalid port");

	let server = net.createServer((socket) => {
		let date = new Date();
		let result = '';
		result += date.getFullYear();
		result += '-';
		result += fill(date.getMonth() + 1);
		result += '-';
		result += fill(date.getDate());
		result += ' ';
		result += fill(date.getHours());
		result += ':';
		result += fill(date.getMinutes());
		result += '\n';

		socket.end(result);
	})

	server.listen(Number(process.argv[2]))
	.on('error', (err) => {
		console.error(err);
		return ;
	})
}catch(err){
	console.error(err);
}