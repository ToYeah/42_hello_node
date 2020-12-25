/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: totaisei <totaisei@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 11:36:05 by totaisei          #+#    #+#             */
/*   Updated: 2020/12/24 17:33:22 by totaisei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require('http');

let str = '';

try{
	if (process.argv.length != 3)
		throw new Error("Invalid argv");
	http.get(process.argv[2], (res) => {
		res.setEncoding('utf-8');
		res.on('data', (body) => {
			str += body;
		});
		res.on('error', (err) => {
			console.error(err);
			return ;
		})
		res.on('end', () =>{
			console.log(str);
		})
	}).on('error', (err) => {
		console.error(err);
	});
}catch(err)
{
	console.error(err);
}