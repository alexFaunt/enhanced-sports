import { h, Component } from 'preact'
import { POSITION } from '../../../constants/widgets'

export default class extends Component {
  static widgetName = 'Position Widget'
  static description = 'Position widget description'
  static type = POSITION

  render({ showcase }) {
    return (
      <div>
        Position Widget!!! Is showcase? { showcase }
      </div>
    )
  }
}
