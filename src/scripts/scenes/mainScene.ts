import { Scene3D } from 'enable3d'

export default class MainScene extends Scene3D {
  constructor() {
    super({ key: 'MainScene' })
  }

  init() {
    this.requestThirdDimension()
  }

  create() {
    this.accessThirdDimension()
    this.third.warpSpeed()

    this.third.add.box()
    this.third.physics.add.box()

    this.third.haveSomeFun()
  }

  update() {}
}
