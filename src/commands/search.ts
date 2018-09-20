import {Command, flags} from '@oclif/command'
import axios from 'axios'

export default class Search extends Command {
  static description = 'search meetup.com'

  static flags = {
    help: flags.help({char: 'h'}),
    zip: flags.string({char: 'z', description: 'zipcode to search in'}),
  }

  static args = [{name: 'text', required: true}]

  async run() {
    const {args, flags} = this.parse(Search)
    const query = {key: process.env.MEETUP_API_KEY, text: args.text, zip: flags.zip}

    const {data: meetups} = await axios.get('https://api.meetup.com/find/groups', {params: query})
    for (let meetup of meetups) {
      this.log(meetup.name)
    }
  }
}
