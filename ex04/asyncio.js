/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: totaisei <totaisei@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 10:40:34 by totaisei          #+#    #+#             */
/*   Updated: 2020/12/25 13:22:04 by totaisei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');

let result;

try{
	if (process.argv.length == 3)
	{
		fs.readFile(process.argv[2],(err, buf) => {
			if (err) return;
			result = (buf.toString().split('\n').length - 1)
			console.log(result);
		}) 
	}
} catch(_){
}