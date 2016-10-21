import React from "react";

export default class Total extends React.Component {
  componentDidMount() {
  }

  render() {
    return <td>
      <form class="form-inline">
        <div class="form-group">
          <label class="sr-only" for="exampleInputAmount">Amount (in pounds)</label>
          <div class="input-group">
            <div class="input-group-addon">£</div>
            <div class="input-group-addon">10.00</div>
          </div>
        </div>
      </form>
    </td>
  }
}
