import {create} from 'zustand';

interface NodeCoords {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface RelatedNodePort {
  id: string;
  path: string;
}

export interface RelatedNode extends NodeCoords {
  id: string;
  ports: RelatedNodePort[];
}

interface ConnectNode {
  id: string;
  port: RelatedNodePort;
}

interface ContainerBoundaries {
  width: number;
  height: number;
  top: number;
  bottom: number;
  left: number;
}

interface RelatedStore {
  nodes: RelatedNode[];
  container: ContainerBoundaries;

  updateContainer(containerCoords: ContainerBoundaries): void;

  add(ref: RelatedNode): void;

  remove(id: string): void;

  updateCoords(id: string, data: Partial<Omit<RelatedNode, "id" | "ports">>): void;

  getNode(id: string): RelatedNode | undefined;

  connect(a: ConnectNode, b: ConnectNode): void;
}

export const useRelatedStore = create<RelatedStore>((setState, getState, store) => (
    {
      nodes: [],
      container: {
        top: 0,
        bottom: 0,
        left: 0,
        width: 0,
        height: 0,
      },
      updateContainer(container) {
        setState((prev) => ({...prev, container}));
      },
      add(node) {
        setState((previousState) => {
          let nodes = previousState.nodes;
          if (previousState.nodes.some(prevNode => prevNode.id === node.id)) {
            nodes = previousState.nodes.filter(prevNode => prevNode.id !== node.id);
          }
          nodes.push(node);
          return {nodes};
        });
      },
      getNode(id: string) {
        return store.getState().nodes.find(node => node.id === id);
      },
      updateCoords(id: string, data) {
        setState(prevState => {
          return {
            ...prevState,
            nodes: prevState.nodes.map(node => {
              if (node.id === id) {
                return {...node, ...data};
              } else {
                return node;
              }
            })
          };
        });
      },
      remove(id) {
        setState((previousState) => {
          return {nodes: previousState.nodes.filter(node => node.id !== id)};
        });
      },
      connect(a, b) {
        setState((previousState) => {
          return {};
        });
      }
    }
));