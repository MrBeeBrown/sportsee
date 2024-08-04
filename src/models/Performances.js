class Performances {
  constructor(data) {
    this.kind1 = data[0].kind[1];
    this.kind2 = data[0].kind[2];
    this.kind3 = data[0].kind[3];
    this.kind4 = data[0].kind[4];
    this.kind5 = data[0].kind[5];
    this.kind6 = data[0].kind[6];
    this.data1 = data[0].data[0].value;
    this.data2 = data[0].data[1].value;
    this.data3 = data[0].data[2].value;
    this.data4 = data[0].data[3].value;
    this.data5 = data[0].data[4].value;
    this.data6 = data[0].data[5].value;
  }

  toJSON() {
    return (
      [
        {
          "kind": this.kind1,
          "value": this.data1
        },
        {
          "kind": this.kind2,
          "value": this.data2
        },
        {
          "kind": this.kind3,
          "value": this.data3
        },
        {
          "kind": this.kind4,
          "value": this.data4
        },
        {
          "kind": this.kind5,
          "value": this.data5
        },
        {
          "kind": this.kind6,
          "value": this.data6
        }
      ]
    )
  }
}

export default Performances;