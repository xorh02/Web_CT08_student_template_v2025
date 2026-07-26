function draw(){

for (let orb of orbs) {
      if (box.colliding(orb)) {
        orb.visible = false;
        orb.collider = "none";
        box.vel.y = -10;
        jumpChance = MAX_JUMP;
      }
    }
for (let orb of orbs) {
      if (box.colliding(orb)) {
        orb.visible = false;
        orb.collider = "none";
        box.vel.y = -10;
        jumpChance = MAX_JUMP;
      }
    }

  }