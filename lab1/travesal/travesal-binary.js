import { LinkedQueue } from "../queue/index.js";

export class TravesalBinary {

	// Pré-ordem (pre-order traversal)
	preOrder(raiz) {
		if (raiz == null) {
			return;
		}
		// 1. Visita a raiz (ROOT) primeiro
		process.stdout.write(raiz.key + " ");
		// 2. Em seguida, percorre o nó esquerdo
		this.preOrder(raiz.left);
		// 3. Por último, percorre o nó direito
		this.preOrder(raiz.right);
	}


	// in Ordem
	inOrder(raiz) {
		if (raiz == null) {
			return;
		}
		// 1. Primeiro, visita o nó esquerdo
		this.inOrder(raiz.left);
		// 2. Em seguida, visita a raiz (ROOT)
		process.stdout.write(raiz.key + " ");
		// 3. Por último, visita o nó direito
		this.inOrder(raiz.right);
	}

	// pos ordem
	postOrder(raiz) {
		if (raiz == null) {
			return;
		}
		// 1. Primeiro, visita o nó esquerdo
		this.postOrder(raiz.left);
		// 2. Em seguida, visita o nó direito
		this.postOrder(raiz.right);
		// 3. Por último, visita a raiz (ROOT)
		process.stdout.write(raiz.key + " ");
	}

	// Tamanho da arvoré
	getSize(raiz) {
		if (raiz == null) {
			return 0;
		}
		return 1 + this.getSize(raiz.left) + this.getSize(raiz.right);
	}

	//  Breadth-First Traversal (BFS) – Travessia por nível
	breadthFirstTraversal(raiz) {
		if (raiz == null) {
			return;
		}

		const queue = new LinkedQueue();
		queue.enqueue(raiz);

		while (!queue.isEmpty()) {
			const node = queue.dequeue();
			console.log(node.key);

			if (node.left !== null) {
				queue.enqueue(node.left);
			}
			if (node.right !== null) {
				queue.enqueue(node.right);
			}
		}
	}

	invertTree(raiz) {
		// Se a raiz for nula, retorna nulo
		if (raiz === null) {
			return null;
		}

		// Inverte o nó esquerdo
		const left = this.invertTree(raiz.left);
		// Inverte o nó direito
		const right = this.invertTree(raiz.right);

		// Troca os nós
		raiz.left = right;
		raiz.right = left;

		return raiz
	}

	toString(raiz) {
		if (raiz == null) {
			return '';
		}

		let result = '';
		const queue = new LinkedQueue();
		queue.enqueue(raiz);

		while (!queue.isEmpty()) {
			const node = queue.dequeue();
			result += node.key + ' ';

			if (node.left !== null) {
				queue.enqueue(node.left);
			}
			if (node.right !== null) {
				queue.enqueue(node.right);
			}
		}

		return result.trim();
	}
}