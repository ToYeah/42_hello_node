/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sum_args.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: totaisei <totaisei@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 09:48:12 by totaisei          #+#    #+#             */
/*   Updated: 2020/12/25 13:04:26 by totaisei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let result = 0;
let i = 2

while(process.argv[i] != undefined)
{
	result += parseInt(process.argv[i]);
	i++;
}

console.log(result)
