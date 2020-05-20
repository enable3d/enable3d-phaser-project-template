import { Scene3D } from '@enable3d/phaser-extension'

export default class MainScene extends Scene3D {
  constructor() {
    super({ key: 'MainScene' })
  }

  init() {
    this.accessThirdDimension()
  }

  create() {
    // adjust width and height
    this.third.renderer.setSize(1280, 720)
    // @ts-ignore
    this.third.camera.aspect = 1280 / 720
    this.third.camera.updateProjectionMatrix()

    this.third.warpSpeed()

    this.third.add.box({ x: 1, y: 2 })
    this.third.physics.add.box({ x: -1, y: 2 })

    this.third.haveSomeFun()
  }

  update() {}
}
