import { Scene3D } from '@enable3d/phaser-extension'

export default class MainScene extends Scene3D {
  constructor() {
    super({ key: 'MainScene' })
  }

  init() {
    this.accessThirdDimension()
  }

  create() {
    // add a phaser text
    const text = this.add.text(this.cameras.main.centerX, 2, 'Phaser + Three.js = ♥', { fontSize: 32, color: 'purple' })
    text.setOrigin(0.5, 0)

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
