import {Command} from '@oclif/command'
import axios from 'axios'

export default class Search extends Command {
  static description = 'search meetup.com'

  async run() {
    const query = {key: process.env.MEETUP_API_KEY}

    const {data: account} = await axios.get('https://api.meetup.com/members/self', {params: query})
    this.log(account.name)
  }
}
