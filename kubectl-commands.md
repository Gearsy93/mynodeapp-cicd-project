## Cluster Information

### `kubectl cluster-info`
Displays information about the Kubernetes cluster, including master and service endpoints.

---

## Namespace Management

### `kubectl get namespace`
Lists all namespaces in the Kubernetes cluster.

### `kubectl create namespace my-micro-service`
Creates a new namespace called `my-micro-service`.

---

## Service Account Management

### `kubectl create serviceaccount cicd-sa --namespace=my-micro-service`
Creates a service account named `cicd-sa` in the `my-micro-service` namespace.

### `kubectl describe serviceaccount cicd-sa --namespace=my-micro-service`
Displays detailed information about the `cicd-sa` service account in the `my-micro-service` namespace.

### `kubectl get serviceaccount --namespace=my-micro-service`
Lists all service accounts in the `my-micro-service` namespace.

### `kubectl get serviceaccount cicd-sa --namespace=my-micro-service -o yaml`
Outputs the configuration of the `cicd-sa` service account in YAML format.

---

## Secrets Management

### `kubectl apply -f cicd-sa-token.yaml --namespace=my-micro-service`
Applies the configuration in the `cicd-sa-token.yaml` file to the `my-micro-service` namespace.

### `kubectl get secret --namespace=my-micro-service`
Lists all secrets in the `my-micro-service` namespace.

### `kubectl get secret cicd-sa-token --namespace=my-micro-service -o yaml`
Outputs the configuration of the `cicd-sa-token` secret in YAML format.

---

## Role Binding

### `kubectl create rolebinding cicd-rb --role=cicd-role --serviceaccount=my-micro-service:cicd-sa --namespace=my-micro-service`
Creates a role binding named `cicd-rb` to associate the `cicd-role` role with the `cicd-sa` service account in the `my-micro-service` namespace.
