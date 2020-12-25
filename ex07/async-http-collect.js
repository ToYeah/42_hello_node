/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: totaisei <totaisei@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 13:48:18 by totaisei          #+#    #+#             */
/*   Updated: 2020/12/24 17:02:03 by totaisei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require('http');
const bl = require('bl');

function get_str(index)
{
	return new Promise ((resolve, reject) => {
		http.get(process.argv[index + 2], (res) => {
			res.pipe(bl((err, data) => {
				if(err) reject(new Error("reject bl"));
				resolve(data.toString())
			}));
			res.on('error', (err) => {
				reject(err);
			})
		}).on('error', (err) => {
			reject(err);
		});
	})
}

try{
	if (process.argv.length != 5)
		throw new Error("Invalid argv");
	Promise.all([get_str(0), get_str(1), get_str(2)])
	.then((value) => {
		console.log(value[0]);
		console.log(value[1]);
		console.log(value[2]);
	})
	.catch((err) => {
		console.error(err)
	});
}catch(err)
{
	console.error(err);
}