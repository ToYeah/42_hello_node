/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: totaisei <totaisei@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 18:02:32 by totaisei          #+#    #+#             */
/*   Updated: 2020/12/24 16:58:43 by totaisei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require('http');
const bl = require('bl');

let str;

try{
	if (process.argv.length != 3)
		throw new Error("Invalid argv")
	http.get(process.argv[2], (res) => {
		res.pipe(bl((err, res) => {
			if (err)
			{
				console.error(err);
				return ;
			}
			str = res.toString();
			console.log(str.length);
			console.log(str.toString());
		}));
		res.on('error', (err) => {
			console.error(err);
			return ;
		})
	}).on('error', (err) => {
		console.error(err);
		return ;
	})
}catch (err){
	console.error(err);
}
