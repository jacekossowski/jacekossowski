
const Games_4x4 = [
    // Game 1
    {
        mask: [
            [[1, 1, 0, 0], [1, 0, 1, 0], [1, 0, 0, 0], [1, 0, 1, 1]],
            [[0, 1, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0]],
            [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1], [1, 1, 0, 0]],
            [[0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0]]
        ],
        values: [
            [[3, 1, 0, 0], [2, 0, 1, 0], [4, 0, 0, 0], [1, 0, 3, 4]],
            [[0, 4, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0]],
            [[4, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 3], [3, 1, 0, 0]],
            [[0, 3, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 4, 0, 0]]
        ]
    },
    // Game 2
    {
        mask: [
            [[0, 0, 0, 0], [0, 0, 1, 1], [0, 0, 0, 0], [1, 1, 0, 0]],
            [[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 0], [1, 0, 0, 0]],
            [[0, 1, 0, 1], [0, 0, 0, 1], [0, 0, 0, 0], [1, 1, 0, 0]],
            [[0, 0, 0, 0], [0, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 1]]
        ],
        values: [
            [[0, 0, 0, 0], [0, 0, 1, 3], [0, 0, 0, 0], [3, 1, 0, 0]],
            [[0, 0, 0, 1], [0, 0, 0, 4], [0, 0, 0, 0], [4, 0, 0, 0]],
            [[0, 2, 0, 4], [0, 0, 0, 2], [0, 0, 0, 0], [2, 3, 0, 0]],
            [[0, 0, 0, 0], [0, 2, 4, 1], [0, 0, 0, 0], [0, 0, 0, 2]]
        ]
    },
    // Game 3
    {
        mask: [
            [[1, 0, 1, 0], [0, 1, 0, 0], [1, 0, 1, 0], [1, 0, 0, 1]],
            [[0, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0]],
            [[0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 1]],
            [[1, 0, 0, 0], [0, 0, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]]
        ],
        values: [
            [[2, 0, 3, 0], [0, 2, 0, 0], [1, 0, 4, 0], [3, 0, 0, 4]],
            [[0, 0, 0, 0], [3, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 0]],
            [[0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 2, 0], [0, 3, 0, 1]],
            [[3, 0, 0, 0], [0, 0, 4, 1], [0, 0, 0, 0], [0, 0, 0, 0]]
        ]
    },
    // Game 4
    {
        mask: [
            [[0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 1], [1, 0, 0, 0]],
            [[1, 1, 0, 1], [1, 1, 0, 0], [1, 0, 0, 0], [0, 0, 1, 0]],
            [[1, 0, 0, 0], [0, 1, 0, 0], [1, 0, 0, 0], [0, 1, 0, 0]],
            [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 1, 0]]
        ],
        values: [
            [[0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 3], [3, 0, 0, 0]],
            [[3, 1, 0, 2], [2, 4, 0, 0], [1, 0, 0, 0], [0, 0, 2, 0]],
            [[4, 0, 0, 0], [0, 1, 0, 0], [2, 0, 0, 0], [0, 4, 0, 0]],
            [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 0, 4, 0]]
        ]
    },
    // Game 5
    {
        mask: [
            [[0, 0, 0, 0], [0, 1, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
            [[0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            [[0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]],
            [[1, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 1], [0, 1, 1, 0]]
        ],
        values: [
            [[0, 0, 0, 0], [0, 1, 0, 3], [0, 0, 0, 0], [0, 0, 0, 0]],
            [[0, 0, 4, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            [[0, 0, 0, 0], [0, 4, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]],
            [[2, 0, 0, 4], [0, 0, 0, 0], [0, 0, 0, 3], [0, 4, 1, 0]]
        ]
    }
];


const Games_5x5 = [
    // Game 1
    {
        mask: [
            [[0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 0, 1, 0], [1, 1, 0, 0, 0]],
            [[1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 1, 0], [1, 0, 0, 0, 0], [0, 1, 1, 0, 0], [1, 0, 0, 1, 1], [0, 1, 1, 0, 0]],
            [[1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 1, 0, 0, 0], [1, 1, 0, 0, 1], [0, 0, 1, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
        ],
        values: [
            [[0, 0, 0, 0, 0], [5, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 5, 0, 1, 0], [3, 2, 0, 0, 0]],
            [[2, 0, 0, 0, 0], [0, 0, 0, 0, 3], [0, 0, 0, 0, 0], [3, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 4, 0], [4, 0, 0, 0, 0], [0, 5, 3, 0, 0], [5, 0, 0, 2, 1], [0, 4, 2, 0, 0]],
            [[1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [3, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 3, 0, 0, 0], [3, 2, 0, 0, 5], [0, 0, 2, 0, 3], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
        ]
    },
    // Game 2
    {
        mask: [
            [[0, 0, 0, 1, 0], [1, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[1, 0, 1, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0]],
            [[1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 0, 0, 1, 0], [0, 1, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0]],
            [[1, 0, 0, 0, 0], [0, 0, 0, 1, 1], [1, 0, 0, 0, 1], [0, 0, 1, 0, 0], [0, 1, 0, 0, 0]]
        ],
        values: [
            [[0, 0, 0, 4, 0], [5, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[3, 0, 1, 0, 0], [2, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0]],
            [[4, 0, 0, 0, 0], [0, 0, 0, 0, 0], [2, 0, 0, 5, 0], [0, 1, 0, 0, 4], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [4, 3, 0, 0, 0], [0, 0, 0, 4, 0], [5, 4, 0, 0, 0], [0, 0, 4, 0, 0]],
            [[5, 0, 0, 0, 0], [0, 0, 0, 4, 2], [1, 0, 0, 0, 4], [0, 0, 1, 0, 0], [0, 4, 0, 0, 0]]
        ]
    },
    // Game 3
    {
        mask: [
            [[0, 0, 0, 1, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 0, 1, 0, 0], [1, 0, 1, 0, 0]],
            [[0, 1, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[1, 1, 1, 0, 1], [0, 1, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]],
            [[1, 1, 0, 0, 0], [0, 1, 0, 0, 1], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 1, 0, 0, 1]]
        ],
        values: [
            [[0, 0, 0, 4, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 4, 3, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [5, 0, 0, 0, 0], [0, 0, 2, 0, 0], [4, 0, 5, 0, 0]],
            [[0, 5, 2, 0, 0], [0, 0, 4, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[2, 1, 5, 0, 4], [0, 3, 0, 5, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]],
            [[5, 3, 0, 0, 0], [0, 1, 0, 0, 2], [0, 0, 2, 0, 0], [0, 0, 0, 0, 0], [0, 4, 0, 0, 5]]
        ]
    },
    // Game 4
    {
        mask: [
            [[0, 0, 0, 0, 0], [0, 1, 0, 1, 0], [0, 0, 0, 0, 1], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [1, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 1], [0, 0, 0, 0, 0], [1, 0, 0, 1, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 0, 0, 0, 1], [0, 1, 0, 0, 0]]
        ],
        values: [
            [[0, 0, 0, 0, 0], [0, 4, 0, 2, 0], [0, 0, 0, 0, 2], [0, 0, 4, 0, 0], [0, 0, 2, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 4, 0, 3], [0, 0, 0, 4, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 1, 3], [0, 0, 0, 0, 0], [2, 0, 0, 0, 0], [0, 0, 0, 0, 4], [5, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 4], [0, 0, 0, 0, 0], [3, 0, 0, 4, 0], [5, 4, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[5, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 5, 2, 3, 0], [0, 0, 0, 0, 3], [0, 4, 0, 0, 0]]
        ]
    },
    // Game 5
    {
        mask: [
            [[0, 0, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]],
            [[0, 1, 0, 0, 1], [1, 0, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 0, 0], [0, 1, 1, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 1], [0, 0, 0, 1, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0]]
        ],
        values: [
            [[0, 0, 0, 0, 0], [0, 3, 4, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 5, 0, 0]],
            [[0, 2, 0, 0, 5], [4, 0, 0, 0, 0], [0, 0, 0, 1, 4], [0, 0, 0, 0, 0], [0, 4, 2, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 1], [0, 0, 0, 4, 0], [0, 0, 2, 0, 0], [0, 0, 5, 0, 0], [0, 0, 0, 1, 0]]
        ]
    }
];

/** * 1. LOGIC ENGINE (Same as before) **/
class LogicalCube {
    constructor(size) {
        this.size = size;
        this.content = Array(size).fill().map(() =>
            Array(size).fill().map(() => Array(size).fill(0)));
        this.fixed = Array(size).fill().map(() =>
            Array(size).fill().map(() => Array(size).fill(0)));
    }
    checkRules(i, j, k, val) {
        if (val === 0) return true;
        for (let s = 0; s < this.size; s++) {
            if (s !== i && this.content[s][j][k] === val) return false;
            if (s !== j && this.content[i][s][k] === val) return false;
            if (s !== k && this.content[i][j][s] === val) return false;
        }
        return true;
    }
    setCell(i, j, k, val) {
        if (this.fixed[i][j][k]) return;
        if (val === 0 || this.checkRules(i, j, k, val)) {
            this.content[i][j][k] = val;
            return true;
        }
        return false;
			    }


    loadContentFromArrays(fixedMask, initialContent) {
    this.size = fixedMask.length;

    // We create NEW arrays to ensure Three.js sees the data change
    this.fixed = JSON.parse(JSON.stringify(fixedMask));
    this.content = JSON.parse(JSON.stringify(initialContent));
    }
}

/** * 2. SCENE SETUP (Logic engine remains same) **/
size = 4;
const cube = new LogicalCube(size);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cubeGroup = new THREE.Group();
scene.add(cubeGroup);
offset = (size - 1) / 2;

// Materials: Solid for main grid, Glowing/Thick for active slice
const mainGridMat = new THREE.LineBasicMaterial(
{ color: 0xffffff, linewidth: 0.5, transparent: true, opacity: 0.6 });
const sliceMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 0.5, transparent: true, opacity: 0.7});

const grids = { x: [], y: [], z: [] };

function createGrids() {
    for (let i = 0; i <= size; i++) {
        const xGroup = new THREE.Group();
        const yGroup = new THREE.Group();
        const zGroup = new THREE.Group();
        eps = 0.01;
        // We create 2 sets of lines: one for the static grid, one for the potential highlight
        for (let j = 0; j <= size; j++) {
            // X-Axis Slices
            const px = [new THREE.Vector3(i-offset-0.5, j-offset-0.5, -offset-0.5), new THREE.Vector3(i-offset-0.5, j-offset-0.5, offset+0.5)];
            const px2 = [new THREE.Vector3(i-offset-0.5, -offset-0.5, j-offset-0.5), new THREE.Vector3(i-offset-0.5, offset+0.5, j-offset-0.5)];
            xGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(px), mainGridMat.clone()));
            xGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(px2), mainGridMat.clone()));

            // Y-Axis Slices
            const py = [new THREE.Vector3(j-offset-0.5, i-offset-0.5, -offset-0.5), new THREE.Vector3(j-offset-0.5, i-offset-0.5, offset+0.5)];
            const py2 = [new THREE.Vector3(-offset-0.5, i-offset-0.5, j-offset-0.5), new THREE.Vector3(offset+0.5, i-offset-0.5, j-offset-0.5)];
            yGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(py), mainGridMat.clone()));
            yGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(py2), mainGridMat.clone()));

            // Z-Axis Slices
            const pz = [new THREE.Vector3(j-offset-0.5, -offset-0.5, i-offset-0.5), new THREE.Vector3(j-offset-0.5, offset+0.5, i-offset-0.5)];
            const pz2 = [new THREE.Vector3(-offset-0.5, j-offset-0.5, i-offset-0.5), new THREE.Vector3(offset+0.5, j-offset-0.5, i-offset-0.5)];
            zGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pz), mainGridMat.clone()));
            zGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pz2), mainGridMat.clone()));
        }
        grids.x.push(xGroup); grids.y.push(yGroup); grids.z.push(zGroup);
        cubeGroup.add(xGroup); cubeGroup.add(yGroup); cubeGroup.add(zGroup);
    }
}

createGrids();
// Elevator and Sprite logic remains the same...
const elevatorMesh = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 1.1), new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true }));
cubeGroup.add(elevatorMesh);
let elevLogPos = { x: 0, y: 0, z: 3 };



function getActiveState() {
    const viewVector = new THREE.Vector3(0, 0, 1);
    viewVector.applyQuaternion(cubeGroup.quaternion);

    const absX = Math.abs(viewVector.x);
    const absY = Math.abs(viewVector.y);
    const absZ = Math.abs(viewVector.z);

    let axis = 'z';
    let index = elevLogPos.z;

    if (absX > absY && absX > absZ) {
        axis = 'x';
        index = elevLogPos.x;
    } else if (absY > absX && absY > absZ) {
        axis = 'y';
        index = elevLogPos.y;
    }
    return { axis, index };
}

/** * 2. UPDATE LOGIC (Faithful Orientation Check) **/
function updateSlices() {
    // 1. Determine the active slice (same logic as refreshNumbers)
    const viewVector = new THREE.Vector3(0, 0, 1);
    viewVector.applyQuaternion(cubeGroup.quaternion);

    const absX = Math.abs(viewVector.x);
    const absY = Math.abs(viewVector.y);
    const absZ = Math.abs(viewVector.z);

    let activeAxis = 'z';
    let activeIndex = elevLogPos.z;
    if (absX > absY && absX > absZ) { activeAxis = 'x'; activeIndex = elevLogPos.x; }
    else if (absY > absX && absY > absZ) { activeAxis = 'y'; activeIndex = elevLogPos.y; }

    ['x', 'y', 'z'].forEach(lineAxis => {
        grids[lineAxis].forEach((group, idx) => {
              group.children.forEach(line => {

let isFrontRim = false;

    // 1. Only check for the "Front" or "Back" planes of the cube
    // (idx === 0 is the far back, idx === size is the far front)
    if (lineAxis !== activeAxis && (idx === 0 || idx === size)) {
        const pos = line.geometry.attributes.position.array;

        // Use a small epsilon (0.1) to account for float math rounding
        const minB = -offset - 0.5;
        const maxB =  offset + 0.5;

        if (Math.abs(pos[2] - maxB) > 0.1){
           isFrontRim = false;
        } else if (lineAxis === 'x') {
            // An X-line is a rim if its Y-position is at the top or bottom boundary
            const yPos = pos[1];
            if (Math.abs(yPos - minB) < 0.1 || Math.abs(yPos - maxB) < 0.1) {
                isFrontRim = true;
            }
        }
        else if (lineAxis === 'y') {
            // A Y-line is a rim if its X-position is at the left or right boundary
            const xPos = pos[0];
            if (Math.abs(xPos - minB) < 0.1 || Math.abs(xPos - maxB) < 0.1) {
                isFrontRim = true;
            }
        }
    }




            const isHighlighted = (lineAxis === activeAxis && (idx === activeIndex || idx === activeIndex + 1));



                if (isFrontRim) {
                    line.material.color.set(0xffff00); // PERMANENT YELLOW RIM
                    line.material.opacity = 1.0;

                                // --- THE MAGIC LINES ---
                    line.renderOrder = 3000;           // Higher numbers render on top of lower numbers
                    line.material.depthTest = false;  // Allows the line to "shine through" other objects
                    line.material.transparent = true;
               } else if (isHighlighted) {
                    line.material.color.set(0xdddddd);
                    line.material.linewidth = 1;
                    line.material.transparent = true
                    line.material.opacity = 0.8
                    line.material.depthTest = true;
                    line.renderOrder = 10; // Drawn last (on top)
                } else {
                    line.material.color.set(0x666666);
                    line.material.linewidth = 1;
                    line.material.transparent = true
                    line.material.opacity = 0.4
                    line.renderOrder = 0; // Drawn first
                    line.material.depthTest = true;
                }
            });
        });
    });
}

// Key handling, Mouse Drag, and refreshNumbers go here as in previous version...
    // (Inside animate loop, call updateSlices())



/** * 3. TEXT RENDERING (USING CANVAS SPRITES) **/
const numberGroup = new THREE.Group();
cubeGroup.add(numberGroup);

function createTextSprite(message, color) {
 const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 256;

    // 1. CLEAR THE CANVAS (This makes it 100% transparent)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Draw the text
    ctx.fillStyle = color;
    ctx.font = "300 200px Arial"; // Use thin weight as discussed before
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(message, 128, 128);

    // 3. Create Texture
    const texture = new THREE.CanvasTexture(canvas);

    // 4. Update Material
    const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true, // CRITICAL: Tells Three.js to use the alpha channel
        alphaTest: 0.1,    // Helps prevent "ghostly" boxes in 3D depth
        depthWrite: false  // Prevents the invisible box from "cutting" grid lines
    });

    const sprite = new THREE.Sprite(spriteMat);
    return sprite;
}

function refreshNumbers() {
// 1. Determine the active slice (same logic as updateSlices)
    const viewVector = new THREE.Vector3(0, 0, 1);
    viewVector.applyQuaternion(cubeGroup.quaternion);

    const absX = Math.abs(viewVector.x);
    const absY = Math.abs(viewVector.y);
    const absZ = Math.abs(viewVector.z);

    let activeAxis = 'z';
    let activeIndex = elevLogPos.z;
    if (absX > absY && absX > absZ) { activeAxis = 'x'; activeIndex = elevLogPos.x; }
    else if (absY > absX && absY > absZ) { activeAxis = 'y'; activeIndex = elevLogPos.y; }

    // 2. Clear existing sprites
    while(numberGroup.children.length > 0) numberGroup.remove(numberGroup.children[0]);

    for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
            for(let k=0; k<size; k++) {
                const val = cube.content[i][j][k];
                if (val > 0) {
                    const color = cube.fixed[i][j][k] ? "#00ff00" : "#ffff00";
                    const sprite = createTextSprite(val.toString(), color);

                    sprite.userData = { lx: i, ly: j, lz: k }; // Store the logical index
                    numberGroup.add(sprite);

                    // 3. Check if this digit is in the active slice
                    let inActiveSlice = false;
                    if (activeAxis === 'x' && i === activeIndex) inActiveSlice = true;
                    if (activeAxis === 'y' && j === activeIndex) inActiveSlice = true;
                    if (activeAxis === 'z' && k === activeIndex) inActiveSlice = true;

                    // 4. Apply opacity
                    sprite.material.transparent = true;
                    sprite.material.opacity = inActiveSlice ? 1.0 : 0.4;

                    sprite.position.set(i-offset, j-offset, k-offset);
                    numberGroup.add(sprite);
                }
            }
        }
    }
}

function updateNumberVisibility() {
    const { axis, index } = getActiveState();

    numberGroup.children.forEach(sprite => {
        // We assume you stored the logical position on the sprite during creation
        const pos = sprite.userData;
        if (!pos) return;

        let isBright = false;
        if (axis === 'x' && pos.lx === index) isBright = true;
        else if (axis === 'y' && pos.ly === index) isBright = true;
        else if (axis === 'z' && pos.lz === index) isBright = true;

        sprite.material.opacity = isBright ? 1.0 : 0.3;
        // Optional: Make inactive numbers slightly smaller to clear the view
        const s = isBright ? 0.8 : 0.6;
        sprite.scale.set(s, s, s);
    });
}

/** * 4. CONTROLS **/

function updateElevator() {
    elevatorMesh.position.set(elevLogPos.x - offset, elevLogPos.y - offset, elevLogPos.z - offset);
   /* document.getElementById('status').innerText = `Elevator position: (${elevLogPos.x}, ${elevLogPos.y}, ${elevLogPos.z})`; */
}

function rebuildGameScene() {
    // 1. Clear existing Grid Groups from the scene
    ['x', 'y', 'z'].forEach(axis => {
        grids[axis].forEach(group => cubeGroup.remove(group));
        grids[axis] = []; // Reset the arrays
    });

    // 2. Clear Existing Numbers
    while(numberGroup.children.length > 0) numberGroup.remove(numberGroup.children[0]);

    // 3. Reset Elevator Position to (0,0,0) or center to avoid IndexOutOfBounds
    elevLogPos = { x: 0, y: 0, z: size-1 };

    // 4. CALL YOUR GENERATORS AGAIN
    createGrids();     // This function must use the NEW 'size' variable
    refreshNumbers();  // This function must use the NEW 'size' variable
    updateElevator();  // Move the red wireframe to the new (0,0,0)
    updateSlices();    // Update the highlighting
}

function loadSpecificGame(type, index) {
    // Determine which dataset to pull from
    const gameSet = (type === 5) ? Games_5x5 : Games_4x4;
    const game = gameSet[index];

    if (game) {
        // 1. Update Global State
        size = game.mask.length;
        offset = (size - 1) / 2;

        // 2. Load the actual data into your cube object
        cube.loadContentFromArrays(game.mask, game.values);

        // 3. Clear the old 3D objects and draw new ones
        rebuildGameScene();

        console.log(`Game ${index} (${type}x${type}) loaded.`);
    }
}

function onArrowUp(){
  if (elevLogPos.y < size - 1){
      elevLogPos.y++;
      refreshNumbers();
      updateSlices();
      updateElevator();
    }
}

function onArrowDown(){
    if (elevLogPos.y > 0){
        elevLogPos.y--;
        refreshNumbers();
        updateSlices();
        updateElevator();
    }
}

function onArrowLeft(){
     if (elevLogPos.x > 0){
         elevLogPos.x--;
         refreshNumbers();
         updateSlices();
         updateElevator();
    }
}

function onArrowRight(){
    if (elevLogPos.x < size - 1){
        elevLogPos.x++;
        refreshNumbers();
        updateSlices();
        updateElevator();
    }
}

function onArrowOut(){
    if (elevLogPos.z < size - 1) {
        elevLogPos.z++;
        refreshNumbers();
        updateSlices();
        updateElevator();
    }
 }

function onArrowIn(){
    if (elevLogPos.z > 0){
        elevLogPos.z--;
        refreshNumbers();
        updateSlices();
        updateElevator();
        }
}

function onNumButton(number){
    cube.setCell(elevLogPos.x, elevLogPos.y, elevLogPos.z, number);
        refreshNumbers();
}

const upBtn = document.getElementById('up');
const downBtn = document.getElementById('down');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const inBtn = document.getElementById('in');
const outBtn = document.getElementById('out');

const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const delBtn = document.getElementById('del');


upBtn.addEventListener('click', () => {
    onArrowUp();
});

downBtn.addEventListener('click', () => {
    onArrowDown();
});

leftBtn.addEventListener('click', () => {
    onArrowLeft();
});

rightBtn.addEventListener('click', () => {
    onArrowRight();
});

inBtn.addEventListener('click', () => {
      onArrowIn();
});

outBtn.addEventListener('click', () => {
      onArrowOut();
});

oneBtn.addEventListener('click', () => {
      onNumButton(1)
});

twoBtn.addEventListener('click', () => {
       onNumButton(2)
});

threeBtn.addEventListener('click', () => {
      onNumButton(3)
});

fourBtn.addEventListener('click', () => {
       onNumButton(4)
});

fiveBtn.addEventListener('click', () => {
      if (size < 5){
          return;
      }
      onNumButton(5)
});

delBtn.addEventListener('click', () => {
       onNumButton(0)
});


const size_dropdown = document.getElementById('size-option');
const game_dropdown = document.getElementById('game-option');

size_dropdown.addEventListener('change', (event) => {
      size = parseInt(event.target.value, 10);
      game_index = parseInt(game_dropdown.value, 10);
      const game = (size == 4) ? Games_4x4[game_index] : Games_5x5[game_index];
      offset = (size - 1) / 2; // Recalculate the center offset
      cube.loadContentFromArrays(game.mask, game.values);
      rebuildGameScene()
})

game_dropdown.addEventListener('change', (event) => {
      game_index = parseInt(event.target.value, 10);
      size = parseInt(size_dropdown.value, 10);
      const game = (size == 4) ? Games_4x4[game_index] : Games_5x5[game_index];
      offset = (size - 1) / 2; // Recalculate the center offset
      cube.loadContentFromArrays(game.mask, game.values);
      rebuildGameScene()
})

const dropdowns = document.querySelectorAll('select');

dropdowns.forEach(box => {
  box.addEventListener('mousedown', (event) => {
    // This stops the event from reaching your rotation code
    event.stopPropagation();
  });
});



window.addEventListener('keydown', (e) =>
{
// Check if Alt (Option) is being held down
    if (e.altKey) {
        // Handle Alt + Number (0-4)
        // e.code for numbers is 'Digit0', 'Digit1', etc.

        if (e.code.startsWith('Digit')) {
            const numStr = e.code.replace('Digit', ''); // Get "0", "1", etc.
            const gameIndex = parseInt(numStr);

            if (gameIndex >= 0 && gameIndex <= 9) {
                // Stop the browser from doing anything else with this shortcut
                e.preventDefault();

                // console.log("Loading Game:", gameIndex);
                const game = (gameIndex >= 5) ? Games_5x5[gameIndex - 5] : Games_4x4[gameIndex];

                size = game.mask.length; // Set size to 4 or 5 based on the array
                offset = (size - 1) / 2; // Recalculate the center offset

                // Use your translated loading function
                cube.loadContentFromArrays(game.mask, game.values);

                rebuildGameScene()
                return; // Exit so we don't process it as a regular number entry
        }
       }
     }

    elev_moved = false;
    if (e.key === 'ArrowUp') {
        if (e.shiftKey) { if (elevLogPos.z > 0) elevLogPos.z--; elev_moved = true;}
        else { if (elevLogPos.y < size - 1) elevLogPos.y++; elev_moved = true; }
    } else if (e.key === 'ArrowDown') {
        if (e.shiftKey) { if (elevLogPos.z < size - 1) elevLogPos.z++; elev_moved = true; }
        else { if (elevLogPos.y > 0) elevLogPos.y--; elev_moved = true;}
    } else if (e.key === 'ArrowLeft') {
        if (elevLogPos.x > 0) elevLogPos.x--; elev_moved = true;
    } else if (e.key === 'ArrowRight') {
        if (elevLogPos.x < size - 1) elevLogPos.x++; elev_moved = true;
    } else if (e.key >= '0' && e.key <= '5') {
        if (size < 5 && e.key == '5'){
            return;
        }
        cube.setCell(elevLogPos.x, elevLogPos.y, elevLogPos.z, parseInt(e.key));
        refreshNumbers();
    }

    if (elev_moved){
        refreshNumbers();
        updateSlices();
        updateElevator();
        }

});

let isDragging = false;
window.addEventListener('mousedown', () => isDragging = true);
window.addEventListener('mouseup', () => isDragging = false);
window.addEventListener('mousemove', (e) => {
    if (isDragging) {
        cubeGroup.rotation.y += e.movementX * 0.005;
        cubeGroup.rotation.x += e.movementY * 0.005;
    }
});

camera.position.z = 10;
updateElevator();
refreshNumbers();


function animate() {
    requestAnimationFrame(animate);
    updateSlices(); // Important: Dynamic update
    updateNumberVisibility();
    renderer.render(scene, camera);
}
// ... rest of the helper functions from the previous clean script
animate();

loadSpecificGame(4,0)

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});























