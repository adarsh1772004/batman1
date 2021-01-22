class Rain
{
    constructor()
    {
        var option={
            isStatic:false,
            friction:0.5,
            density:2
        }
        var a=Math.round(random(0, 400))
        this.drop=Bodies.circle(a, 0, 25, option)
        World.add(myWorld, this.drop)
    }
    display()
    {
        push ()
        translate (this.drop.position.x, this.drop.position.y)
        rotate (this.drop.angle)
        fill("blue")
        ellipseMode(CENTER)
        ellipse(0, 0, 25)
        pop ()
    }
}