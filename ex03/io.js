/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: totaisei <totaisei@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 10:06:08 by totaisei          #+#    #+#             */
/*   Updated: 2020/12/25 13:18:53 by totaisei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
let buf;
let result = 0;
let str;

try{
	if (process.argv.length == 3)
	{
		buf = fs.readFileSync(process.argv[2]);
		str = buf.toString();
		for(let i = 0; i < str.length; i++)
		{
			if(str[i] == '\n')
				result++;
		}
		console.log(result);
	}
} catch(_){
}