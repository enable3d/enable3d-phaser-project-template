import { Scene3D } from '@enable3d/phaser-extension'

export default class MainScene extends Scene3D {
  constructor() {
    super({ key: 'MainScene' })
  }

  init() {
    this.accessThirdDimension()
  }

  create() {
    // creates a nice scene
    this.third.warpSpeed()

    // adds a box
    this.third.add.box({ x: 1, y: 2 })

    // adds a box with physics
    this.third.physics.add.box({ x: -1, y: 2 })

    // throws some random object on the scene
    this.third.haveSomeFun()
  }

  update() {}
}
