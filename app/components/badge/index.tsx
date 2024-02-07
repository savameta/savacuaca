import React, { useState } from "react";

type Props = {};

export default function Badge({}: Props) {
  const [active, setActive] = useState<Boolean>(false);
  return <div>Badge</div>;
}
